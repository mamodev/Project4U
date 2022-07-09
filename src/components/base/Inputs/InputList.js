import { Fragment } from "react";

export default function InputList (props) {
    const elements = props.list && props.list.map((e,i) => <option key={i} value={e}>{e}</option>)
    return(
        <Fragment>
                <select className="list-minimal" id="roles">
                    <option value="">{props.default}</option>
                    {elements}
                </select>
        </Fragment>
    )
}