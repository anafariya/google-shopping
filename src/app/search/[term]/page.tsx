import { redirect } from "next/navigation";

type Props = {
    searchParams: any;
    params: {
        term: string
    }
}
function SearchPage({searchParams, params: {term}}: Props) {
    if(!term) {
        redirect("/")
    }
  return (
    <div>i am search SearchPage</div>
  )
}

export default SearchPage