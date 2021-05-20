package media.traversy.dto;

public class TaskDto {
	private int id;
	private String text;
	private String day;
	private boolean reminder;

	public TaskDto() {
	}

	public TaskDto(int id, String text, String day, boolean reminder) {
		super();
		this.id = id;
		this.text = text;
		this.day = day;
		this.reminder = reminder;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public String getDay() {
		return day;
	}

	public void setDay(String day) {
		this.day = day;
	}

	public boolean isReminder() {
		return reminder;
	}

	public void setReminder(boolean reminder) {
		this.reminder = reminder;
	}

	@Override
	public String toString() {
		return "TaskDto [id=" + id + ", text=" + text + ", day=" + day + ", reminder=" + reminder + "]";
	}

}
