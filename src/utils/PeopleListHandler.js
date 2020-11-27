export default {
    setList(context, list) {
        context.$store.state.peopleList = list;
    },

    getList(context) {
        return context.$store.state.peopleList;
    }
}