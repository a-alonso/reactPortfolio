import { useEffect } from "react"
import { useParams, Navigate } from "react-router"
import { mapPathToContent, mapPathToTitle } from "../../core/content-mapper"
import { useTitle } from "../../core/hooks"

const Project = () => {
    const params = useParams()
    const { projectName } = params

    useEffect(() => {
        window.scrollTo({ top: 0 })
    },[projectName])

    useTitle(mapPathToTitle(projectName).onNone("Portfolio"))

    return mapPathToContent(projectName)
        .onNone(() => <Navigate to="/portfolio"/>)
}

export default Project