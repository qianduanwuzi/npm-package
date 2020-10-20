export default {
    name: 'WZTestJsx',
    props: {
        text: {
            default: '123',
            type: String
        }
    },
    mounted() {
        console.log(123)
    },
    render() {
        return (
            <div>123</div>
        )
    }
}