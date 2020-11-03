import './ColorCss.css'

function Color(props) {
    return(
        <div className="colorOuter" >
                <div className="colorBlock" style={{backgroundColor : props.color}}></div>
                <div className="colorName">
                   { props.color }
                </div>
        </div>
    )
}
export  default Color