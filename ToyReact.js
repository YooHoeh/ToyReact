/*
 * @Date: 2020-07-20 21:15:34
 * @Description:
 * @Author:
 * @LastEditors: YooHoeh
 * @LastEditTime: 2020-07-21 11:36:13
 */

class ElementWrapper {
    constructor(type) {
        this.root = document.createElement(type);
    }
    setAttribute(name, value) {
        this.root.setAttribute(name, value);
    }
    appendChild(vChild) {
        vChild.mountTo(this.root);
    }
    mountTo(parent) {
        parent.appendChild(this.root);
    }
}
class TextWrapper {
    constructor(content) {
        this.root = document.createTextNode(content);
    }
    setAttribute(name, value) {
        this.root.setAttribute(name, value);
    }

    mountTo(parent) {
        console.warn("textWrapper", this.root);
        parent.appendChild(this.root);
    }
}
export class Component {
    constructor() {
        this.children = [];
    }

    setAttribute(name, value) {
        this[name] = value;
    }

    mountTo(parent) {
        let vdom = this.render();
        console.warn("Comp", vdom, parent);
        vdom.mountTo(parent);
    }

    appendChild(vchild) {
        this.children.push(vchild);
    }
}
export const ToyReact = {
    createElement(type, attrs, ...children) {
        let ele;
        console.warn("children",type,attrs,children,arguments)
        if (typeof type === "string") {
            ele = new ElementWrapper(type);
        } else {
            ele = new type();
        }
        for (let name in attrs) {
            ele.setAttribute(name, attrs[name]);
        }
        const insertChild = (children) => {
            for (let child of children) {
                console.warn("type", typeof child, child);
                if (typeof child === "object" && child instanceof Array) {
                    insertChild(children);
                } else {
                    if (
                        !(child instanceof Component) &&
                        !(child instanceof ElementWrapper) &&
                        !(child instanceof TextWrapper)
                    ) {
                        child = String(child);
                    }
                    if (typeof child === "string") {
                        child = new TextWrapper(child);
                    }
                    ele.appendChild(child);
                }
                if (typeof child === "string") {
                    child = new TextWrapper(child);
                }
                ele.appendChild(child);
            }
        };
        insertChild(children);
        console.warn("Toy", ele);
        return ele;
    },
    render(vdom, ele) {
        console.warn("render", vdom, ele);
        vdom.mountTo(ele);
    },
};
