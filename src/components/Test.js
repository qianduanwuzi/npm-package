const WZTestJsx =  {
    name: 'WZTestJsx',
    props: {
        text: {
            default: '123',
            type: String
        }
    },
    mounted() {
        console.log(123456)
    },
    render() {
        return (
            <div>123</div>
        )
    }
}

export default WZTestJsx
// module.exports = WZTestJsx