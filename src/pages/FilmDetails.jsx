import { useParams } from "react-router";

function FilmDetails() {
    const {filmId} = useParams();
    return (
        <h1>This is film with ID: {filmId}</h1>
    )
}

export default FilmDetails;