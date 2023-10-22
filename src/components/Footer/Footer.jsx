export default function Footer({ data }) {
    return(
        <footer>
      <div>
        <div>
          <ul className="social-links">
            {
              data.socialLinks && data.socialLinks.map((item)=>{
                  <li>
                    <a href={item.url}>
                    <i className={item.className} />
                    </a>
                  </li>
              })
            }
          </ul>
          
        </div>
      </div>
    </footer>
    )
}