type addform = {
    title: string
    textPara: string
}

export default function AddForm({ title, textPara }: addform) {

    return (
        <div className="add-form">
            <form>
                <input type="text" />add title
            </form>
        </div>
    )
}