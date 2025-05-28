import './Footer.css'

export const FooterPage = () => {
    const socialLink = [
        {link: 'https://pa.senac.br/', img_render: './images/fb.png', alt_img: 'img_facebook'},
        {link: 'https://pa.senac.br/', img_render: './images/tw.png', alt_img: 'img_twitter'},
        {link: 'https://pa.senac.br/', img_render: './images/ig.png', alt_img: 'img_instagram'}
    ]

    return (
        <footer className="container_footer">
            <div className="info_footer">
                <div className="social_content">
                    <ul className="social">
                        {socialLink.map((social) => (
                            <li><a href={social.link} target="_blanck" rel="noopener noreferrer"><img src={social.img_render} alt={social.alt_img}/></a></li>
                        ))}
                    </ul>
                </div>
            </div>
            <img className="img_footer" src="./images/formas.png" alt="fundo_png" />
        </footer>
    )
}