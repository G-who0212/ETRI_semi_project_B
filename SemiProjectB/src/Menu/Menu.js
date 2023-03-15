

const Menu = ({LayerMenuToggle}) => {
    return (
        <div className="Menu">
            <nav>
                <ul>
                   <li><div onClick={LayerMenuToggle}>Layer</div></li> 
                   <li><a onClick={LayerMenuToggle}>Information</a></li>
                   <li><a onClick={LayerMenuToggle}>Visualization</a></li>
                   <li><a onClick={LayerMenuToggle}>Code</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Menu;