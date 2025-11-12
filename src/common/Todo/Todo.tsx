interface TodoProps {
  title: string;
  completed: boolean;
}

const Todo = ({ title, completed }: TodoProps) => {
  return (
    <div className="flex items-center gap-1">
      <input type="checkbox" id={title} checked={completed} />
      <label htmlFor={title}>{title}</label>
    </div>
  );
};

export default Todo;
