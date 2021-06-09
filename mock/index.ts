import { MockMethod } from "vite-plugin-mock";

export default [
    {
        url: "/api/posterList",
        method: "get",
        response: () => {
            console.log(">>>>>");
            return {
                code: 1000,
                msg: "SUCCESS",
                data: [
                    {
                        id: 1000, cont: "# 文本内容\n\n$E=mc^2$ [asd](https://gitee.com/SunspotsInys/demo/raw/master/vditor.png)",
                        uid: 1, name: "FFtp", avatar: "t.png",
                    },
                    {
                        id: 1001, cont: "# 文本内容\n\n$e^{i\\sin{x}}=\\sin{x}$",
                        uid: 1, name: "FFtp", avatar: "t.png",
                    },
                    {
                        id: 1002, cont: "# code\n\n```C\n#include <stdio>\nint main() {\n\treturn 0;\n}\n```",
                        uid: 1, name: "Raycc", avatar: "t.png",
                    },
                    {
                        id: 1003, cont: "# 文本内容\n\n$E=mc^2$ [asd](https://gitee.com/SunspotsInys/demo/raw/master/vditor.png)",
                        uid: 1, name: "Inys", avatar: "t.png",
                    },
                    {
                        id: 1004, cont: "# 文本内容\n\n$E=mc^2$ [asd](https://gitee.com/SunspotsInys/demo/raw/master/vditor.png)",
                        uid: 1, name: "SunspotsInys", avatar: "t.png",
                    },
                    {
                        id: 1005, cont: "# 文本内容\n\n$E=mc^2$ [asd](https://gitee.com/SunspotsInys/demo/raw/master/vditor.png)",
                        uid: 1, name: "SunspotsInys", avatar: "t.png",
                    },
                ]
            }
        }
    },
    {
        url: "/api/newPoster",
        method: "post",
        response: () => {
            return {
                code: 1000
            }
        }
    },
    {
        url: "/api/signin",
        method: "post",
        response: () => {
            return {
                code: 1000,
                msg: "SCUESS",
                data: {
                    id: 1000,
                    username: "FFtp",
                    avatar: "t.png",
                    token: "abcdef"
                }
            }
        }
    }
] as MockMethod[]