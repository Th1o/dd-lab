"use strict"

import Users from './Users.json'
import {filter} from './filter';
import './style.css';
import {renderList} from './renderer'
const $ = require('jquery');

const result = document.getElementById('users_list_id')

renderList(Users,result)

document.getElementById('search_input_id')
        .addEventListener('input',e=>renderList(filter(Users, e.target.value),result))






