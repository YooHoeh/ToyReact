import { ToyReact, Component } from "./ToyReact";

class MyComponent extends Component {
    render() {
        return (
            <div>
                <h1 id="jjj" data-d="oooo" d="ppppp">
                    这是一个标题
                </h1>
                <hr />
                <span>这个一个span</span>
                <p>这是一个段落</p>
            </div>
        );
    }
}

let a = <MyComponent name="a" id="ida"></MyComponent>;

ToyReact.render(a, document.body);
