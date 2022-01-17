import { useEffect } from "react"
import { useParams, Navigate } from "react-router"
import { mapPathToContent } from "../../core/content-mapper"

const Project = () => {
    const params = useParams()
    const { projectName } = params

    useEffect(() => {
        window.scrollTo({ top: 0 })
    },[projectName])

    return mapPathToContent(projectName)
        .onNone(() => <Navigate to="/portfolio"/>)
}

export default Project