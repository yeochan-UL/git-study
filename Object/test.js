
const log = console.log;

log(this);

var obj = {
    data: 'youn',
    func: function() {
        log('안녕');
    }
}

obj.func();


var 오브젝트 = {data: {함수() {console.log(this)}}}
