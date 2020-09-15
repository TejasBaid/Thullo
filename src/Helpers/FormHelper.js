export const handleChange = (e,setFunction) => {
    const name = e.target.name;
    const newValue = e.target.value;
    setFunction({[name]: newValue});
    console.log(newValue)

}