import { FC } from "react"
import Header from "../components/Header"

type FrontMatter = {
  title: string
  date: string
}

type Props = {
  frontMatter: FrontMatter
}

const BlogPostLayout:FC<Props> = ({children, frontMatter}) => {
return <><Header/><div>{children}</div></>
}

export default BlogPostLayout