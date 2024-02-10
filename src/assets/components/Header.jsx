function Header(props) {
    return (
        <div>
            <h1 className="text-2xl font-medium">Hello {props.name}!</h1>
            <p>I Help you to manage your activities :)</p>
        </div>
    )
}
export default Header;