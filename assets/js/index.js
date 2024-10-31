import { setChangeDataCallback } from "./data/data.module.js";
import { render } from "./render/render.module.js";

render();
setChangeDataCallback(render);
