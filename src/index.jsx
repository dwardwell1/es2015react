
import fruits from './foods'
import { choice,remove } from './helpers';

function App() {
	
	let fruit = choice(fruits)
    console.log(`I'd like one ${fruit} please`)
    console.log(`here you go: ${fruit}`)
    console.log(`Delicious, may I have another`)
    remove(fruits,fruit)
    console.log(`I'm sorry, we're all out. we have ${fruits.length} left`)
}

App()
export default App;
let tests = [1,2]