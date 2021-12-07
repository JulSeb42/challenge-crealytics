const ConvertPrice = string => {
    const price = string.replace(" EUR", "")
    
    return parseFloat(price)
}

export default ConvertPrice