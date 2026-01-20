export default function AddForm() {

    return (
        <form className="add-form flex flex-col gap-1 bg-white shadow-sm p-4 rounded-3xl">
            <input 
                type="text" 
                placeholder="Add title"
                className="border"
            />
            <button type="submit">Submit</button>
        </form>
    )
}