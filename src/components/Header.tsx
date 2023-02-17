import TrollFace from '/TrollFace.png'

export default function Header() {
    return(
        <header className='header'>
            <img className='header--img' src={TrollFace} alt="Troll Face" />
            <h2 className='header--title'>Meme Generator</h2>
            <h4 className='header--project'>React Course - Project 3</h4>
        </header>
    )
}