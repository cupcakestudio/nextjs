import Anchor from "./Anchor"

export default function Layout({children, navData}) {
  return <>
  <nav>
    {/* doing this mapping we get the elements' url(slug/id) from the data in the navigation and it works on all pages */}
    {navData.map(obj => {
      return <Anchor href={"/dogs/" + obj.slug}>
        {obj.title}
      </Anchor>
    })}
  </nav>
  {children}
  <footer>Footer</footer>
  </>
}