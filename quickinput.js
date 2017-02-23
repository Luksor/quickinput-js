var fs = require("fs");
var contents;
var parsed;
var line = -1;
var delimeter = " ";
var outfile;

exports.in_file = function (path) {
    contents = fs.readFileSync(path).toString().split('\n');
}

exports.out_file = function (path) {
    outfile = path;
}

exports.set_delimeter = function (new_delimeter) {
    delimeter = new_delimeter;
}

exports.line_left = function () {
    if(line<contents.length-2) {
        return true;
    }else{
        return false;
    }
}

exports.parse_line = function () {
    line++;
    parsed = contents[line].split(delimeter);
}

exports.write_out = function (data) {
    fs.writeFileSync(outfile, data);
}

exports.append_out = function (data) {
    fs.appendFileSync(outfile, data);
}

exports.get = function (n) {
    return parsed[n];
}

exports.get_all = function (n) {
    return parsed;
}