import { Maybe, stringMatcher } from "jazzi"
import * as content from "../content"
import data from "./app-data"

const mapPathToId = (path) => Maybe
    .fromNullish(data.projects.find(c => c.path ? c.path === path : c.id === path))
    .fmap(p => p.id)

const mapContent = (content) => {
    return Object.keys(content).reduce((acc, next) => {
        return {
            ...acc,
            [next]: () => content[next]
        }
    }, {})
}

export const mapPathToContent = (path) => {
    return mapPathToId(path)
        .chain(id => {
            return Maybe.fromFalsy(stringMatcher(id).match({
                ...mapContent(content),
                _     : () => undefined
            })).fmap(Comp => <Comp />)
        })
}