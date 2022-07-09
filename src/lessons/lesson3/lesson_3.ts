import {log} from "util";
import axios from "axios";

console.log('lesson 3');

// Event loop
// https://learn.javascript.ru/event-loop
// https://habr.com/ru/company/ruvds/blog/340508/
// https://www.youtube.com/watch?v=8aGhZQkoFbQ
// https://www.youtube.com/watch?v=j4_9BZezSUA
// https://www.jsv9000.app/

// Promise
// https://learn.javascript.ru/promise-basics
// https://www.youtube.com/watch?v=1idOY3C1gYU

const configOMB = {
    baseURL: 'https://jsonplaceholder.typicode.com/',
};

const axiosInstance = axios.create(configOMB);

const postsAPI = {
    getPost(id: string) {
        return axiosInstance.get(`posts/${id}`)
            .then(response => response.data)
    },
    getPosts(){
        return axiosInstance.get("posts")
            .then(response => response.data)
    },
    createPost(requestData: {title: string, body: string, userId: number}){
        return axiosInstance.post("posts",requestData)
            .then(response => response.data)
    },
    updatePost(requestData: {id: number, title: string, body: string, userId: number}){
        return axiosInstance.put(`posts/${requestData.id}`, requestData)
            .then(response => response.data)
    },
    patchPost(id: number, title: string){
        return axiosInstance.patch(`posts/${id}`, {title})
            .then(response => response.data)
    },
    deletePost(id: number){
        return axiosInstance.delete(`posts/${id}`)
            .then(response => response.data)
    },
    getUserPosts(user_ID: number) {
        return axiosInstance
            .get(`posts/?userId=${user_ID}`)
            .then(response => response.data);
    },
    getPostComments(post_ID: number) {
        return axiosInstance
            .get(`posts/${post_ID}/comments`)
            .then(response => response.data);
    },
}

postsAPI.getPost('1')
    .then(data => console.log(data));

postsAPI.getPosts()
    .then(data => console.log(data));

postsAPI.createPost({
    title: 'foo',
    body: 'bar',
    userId: 1,
})
    .then(data => console.log(data));

postsAPI.updatePost({
    id: 1,
    title: 'foo',
    body: 'bar',
    userId: 1,
})
    .then(data => console.log(data));

postsAPI.patchPost(1, "go")
    .then(data => console.log(data));

postsAPI.deletePost(1)
    .then(data => console.log(data));
postsAPI.getUserPosts(1)
    .then(data => console.log("7. Get all posts of user with ID = 1: ", data));

postsAPI.getPostComments(1)
    .then(data => console.log("8. Get all comments of post with ID = 1: ", data));


/*let prom = new Promise((resolve, reject) => {
    setTimeout((response) => {
        if (response.httpStatus >= 200 && response.httpStatus < 400) {
            resolve(response.data);
        } else {
            reject(response.error);
        }
    }, 2000, {httpStatus: 200, data: {userName: "Karina", id: "jndf95889t", status: "active"}, error: {}});
});

prom
    .then(
        res => {
            console.log("res", res);
            return 10
        },
        () => {}
    )

    .then(res2 => {
        console.log("res2", res2);
    })*/

/*
let prom = new Promise((resolve, reject) => {
    setTimeout((response) => {
        if (response.httpStatus >= 200 && response.httpStatus < 400) {
            resolve(response.data);
        } else {
            reject(response.error);
        }
    }, 2000, {httpStatus: 200, data: {userName: "Karina", id: "jndf95889t", status: "active"}, error: {}});
});

prom
    .then(
        res => {
            return new Promise((resolve, reject) => {
                setTimeout((response) => {
                    if (response.httpStatus >= 200 && response.httpStatus < 400) {
                        resolve(response.data);
                    } else {
                        reject(response.error);
                    }
                }, 2000, {httpStatus: 200, data: {id: "jndf95889t", count: "BY142526OP7989779"}, error: {}});
            });
        },
        () => {}
    )

    .then(res2 => {
        console.log("res2", res2);
    })
*/


/*let prom = new Promise((resolve, reject) => {
    setTimeout((response) => {
        if (response.httpStatus >= 200 && response.httpStatus < 400) {
            resolve(response.data);
        } else {
            reject(response.error);
        }
    }, 2000, {httpStatus: 404, data: {}, error: "Not found"});
});

prom
    .then(
        res => {
            return new Promise((resolve, reject) => {
                setTimeout((response) => {
                    if (response.httpStatus >= 200 && response.httpStatus < 400) {
                        resolve(response.data);
                    } else {
                        reject(response.error);
                    }
                }, 2000, {httpStatus: 200, data: {id: "jndf95889t", count: "BY142526OP7989779"}, error: {}});
            });
        },
        err => {
            console.log("error", err)
            throw new Error("Error")
        }
    )

    .then(res2 => {
        console.log("res2", res2);
    },
        err2 => {
            console.log("error2", err2)
        })*/

/*let prom = new Promise((resolve, reject) => {
    setTimeout((response) => {
        if (response.httpStatus >= 200 && response.httpStatus < 400) {
            resolve(response.data);
        } else {
            reject(response.error);
        }
    }, 2000, {httpStatus: 404, data: {id: "gyuy766879nkjnm"}, error: {}});
});

prom
    .then(
        res => {
            throw new Error("Error")
            return new Promise((resolve, reject) => {
                setTimeout((response) => {
                    if (response.httpStatus >= 200 && response.httpStatus < 400) {
                        resolve(response.data);
                    } else {
                        reject(response.error);
                    }
                }, 2000, {httpStatus: 200, data: {id: "jndf95889t", count: "BY142526OP7989779"}, error: {}});
            });
        },
        err => {
            console.log("error", err);
            throw new Error("Error");
        }
    )

    .then(res2 => {
            console.log("res2", res2);
        },
        err2 => {
            console.log("error2", err2);
        })
    .then(
        null,
        err3 => {
            console.log("err", err3)
        });*/

/*let prom = new Promise((resolve, reject) => {
    setTimeout((response) => {
        if (response.httpStatus >= 200 && response.httpStatus < 400) {
            resolve(response.data);
        } else {
            reject(response.error);
        }
    }, 2000, {httpStatus: 404, data: {id: "gyuy766879nkjnm"}, error: {}});
});

prom
    .then(
        res => {
            throw new Error("Error")
            return new Promise((resolve, reject) => {
                setTimeout((response) => {
                    if (response.httpStatus >= 200 && response.httpStatus < 400) {
                        resolve(response.data);
                    } else {
                        reject(response.error);
                    }
                }, 2000, {httpStatus: 200, data: {id: "jndf95889t", count: "BY142526OP7989779"}, error: {}});
            });
        },
        err => {
            console.log("error", err);
            throw new Error("Error");
        }
    )

    .then(res2 => {
            console.log("res2", res2);
        },
        err2 => {
            console.log("error2", err2);
        })
    .catch(err => {
        console.log("err", err)
    })*/
/*
let prom = new Promise((resolve, reject) => {
    setTimeout((response) => {
        if (response.httpStatus >= 200 && response.httpStatus < 400) {
            resolve(response.data);
        } else {
            reject(response.error);
        }
    }, 2000, {httpStatus: 404, data: {id: "gyuy766879nkjnm"}, error: {}});
});

prom
    .then(
        res => {
            throw new Error("Error")
            return new Promise((resolve, reject) => {
                setTimeout((response) => {
                    if (response.httpStatus >= 200 && response.httpStatus < 400) {
                        resolve(response.data);
                    } else {
                        reject(response.error);
                    }
                }, 2000, {httpStatus: 200, data: {id: "jndf95889t", count: "BY142526OP7989779"}, error: {}});
            });
        },
        err => {
            console.log("error", err);
            throw new Error("Error");
        }
    )

    .then(res2 => {
            console.log("res2", res2);
        },
        err2 => {
            console.log("error2", err2);
        })
    .catch(err => {
        console.log("err", err);
    })*/
//
// console.log("Start");
//
// let prom = new Promise((resolve, reject) => {
//     console.log("Start promise");
//     setTimeout((response) => {
//         console.log("Start setTimeout");
//         if (response.httpStatus >= 200 && response.httpStatus < 400) {
//             resolve(response.data);
//         } else {
//             reject(response.error);
//         }
//     }, 2000, {httpStatus: 200, data: {id: "gyuy766879nkjnm"}, error: {}});
//     console.log("End promise");
// });
//
// console.log("Middle");
//
// prom
//     .then(console.log)
// console.log("End");

// https://jsonplaceholder.typicode.com/posts/1
// https://habr.com/ru/company/oleg-bunin/blog/417461/?_ga=2.54695343.543933152.1602500664-1040035071.1596811661


// just a plug
export default () => {
};

