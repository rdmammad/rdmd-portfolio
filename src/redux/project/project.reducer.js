const INITIAL_STATE = {
    project_list : [
        {
            id: 1,
            title: "testour",
            img: require("../../assets/testour.png"),
        },
        {
            id: 2,
            title: "doublemat",
            img: require("../../assets/doublemat.png"),
        },
        {
            id: 3,
            title: "cartoon-friends",
            img: require("../../assets/cartoon_friends.png"),
        },
        {
            id: 4,
            title: "daku drilling school",
            img: require("../../assets/bds.png"),
        },
        {
            id: 5,
            title: "rdmd-clothing",
            img: require("../../assets/rdmd-clothing.png"),
        },
    ],
};

const projectReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
           return state;
    }
};

export default projectReducer;