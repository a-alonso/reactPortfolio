import { Maybe } from "jazzi"
import * as content from "../content"
import data from "./app-data"

const mapPathToData = (path) => Maybe
    .fromNullish(data.projects.find(c => c.path ? c.path === path : c.id === path))

export const mapPathToContent = (path) => {
    return mapPathToData(path)
        .chain(({ id }) => Maybe
            .fromFalsy(content[id])
            .fmap(Comp => <Comp />)
        )
}

export const mapPathToTitle = (path) => {
    return mapPathToData(path)
        .fmap(({ tabTitle }) => tabTitle)
}