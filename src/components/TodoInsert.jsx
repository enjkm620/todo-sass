const TodoInsert = ()=>{
    return (
        <form>
            <label className="sr-only" htmlFor="new">새 일정</label>
            <input type="text" id="new" autoFocus placeholder="새 일정을 입력하세요" autoComplete="off" />
            <button type="button">추가</button>
        </form>
    );
}

export default TodoInsert;