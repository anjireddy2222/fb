function Add(){

    const sum = 0;
    const tmpProps = [...this.props]
	tmpProps.map( item => (
		sum = sum + item
	))

    return(
        <>
        Sum is { sum }
        </>
    )
}

export default Add;

