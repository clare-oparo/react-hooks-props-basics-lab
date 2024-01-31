function Links({links}) {
    console.log(links)
  
    const showLinks = []
    for (let key in links) {
      showLinks.push(<a href={links[key]} key={links[key]}>{links[key]}</a>)
    }
  
    return (
      <>
          <div>Links</div>
          {showLinks}
      </>
    )
  }
  
  export default Links