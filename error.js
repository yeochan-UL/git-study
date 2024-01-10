// try catch

const log = console.log;
function runner() {
    try{
        log('hello');

        throw new Error('에러 입니다.');

        log('hi');
    } catch(e) {
        log('-----catch-----')
        log(e);
    } finally {
        log('----finally----')
    }
}

runner();