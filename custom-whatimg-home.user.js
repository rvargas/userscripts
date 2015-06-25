// ==UserScript==
// @name         Custom WhatIMG Home
// @namespace    https://github.com/rvargas/userscripts
// @version      1.0
// @description  This script creates new input fields and moves/hides other elements
// @author       Rafael Vargas
// @license      GNU GPL v3 <http://www.gnu.org/copyleft/gpl.html>
// @match        https://whatimg.com/
// @match        https://whatimg.com/index.php
// @updateURL    https://github.com/rvargas/userscripts/raw/master/custom-whatimg-home.user.js
// @grant        none
// ==/UserScript==

function hide_uploading_options(){
    var options = document.querySelector('#upoptions_hidden');
    
    options.style.display = 'none';
}

function create_new_tag(tag){
    return document.createElement(tag)
}

function remove_tag_childs(tag){
    var parent = tag.parentNode;
    
    while(tag.firstChild) {
        parent.insertBefore(tag.firstChild,tag);
    }

    parent.removeChild(tag);
}

function expand_form(form){
    var body = document.body;
    
    while(body.firstChild){
        form.appendChild(body.firstChild);
    }
    
    body.appendChild(form);
}

function move_dropdown(dropdown, menu){
    var dropdown_li = create_new_tag('li');
    
    dropdown_li.appendChild(dropdown);
    menu.appendChild(dropdown_li);
    dropdown_li.style.float = 'left'
}

function move_menu(menu){
    menu.style.paddingLeft = '235px';
}

function move_dropdown_to_menu(){
    var form = document.querySelector('#upload_form');
    var menu = document.querySelector('#countrytabs');
    var dropdown = document.getElementsByName('upload_to')[0];

    remove_tag_childs(form);
    expand_form(form);
    move_dropdown(dropdown,menu);
    move_menu(menu)
}

function hide_add_file_button(){
    var button = document.querySelectorAll('input.button1')[0]
    
    button.style.display = 'none'
}

function create_new_file_input(){
    var input_file = document.createElement('input');

    input_file.name = 'userfile1[]'
    input_file.type = 'file'
    input_file.size = '30'

    return input_file
}

function add_file_inputs(){
    var files_container = document.querySelector('#countrydivcontainer').firstElementChild;
    
    for (i = 0; i < 5; i++) {
        files_container.insertBefore(create_new_tag('br'), files_container.firstChild)
        files_container.insertBefore(create_new_file_input(), files_container.firstChild)
    }
}

function main() {
    hide_uploading_options();
    move_dropdown_to_menu();
    hide_add_file_button();
    add_file_inputs();
}

main();