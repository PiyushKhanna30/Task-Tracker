package media.traversy.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import media.traversy.dto.TaskDto;

@RestController
@CrossOrigin(origins = "*")
public class TaskController {
	int id = 0;
	List<TaskDto> tasks;

	@GetMapping(value = "/")
	public ResponseEntity<List<TaskDto>> getTasks() {
		if (id == 0) {
			tasks = new ArrayList<>();
			tasks.add(new TaskDto(id++, "This is default task.", "20-05-2021", false));
		}
		return ResponseEntity.status(HttpStatus.OK).body(tasks);
	}

	@GetMapping(value = "/{id}")
	public ResponseEntity<TaskDto> getTask(@PathVariable int id) {
		for (TaskDto task : tasks) {
			if (task.getId() == id) {
				return ResponseEntity.status(HttpStatus.OK).body(task);
			}
		}
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
	}

	@PostMapping(value = "/")
	public ResponseEntity<TaskDto> addTask(@RequestBody TaskDto task) {
		
		TaskDto newTask = new TaskDto(id++, task.getText(), task.getDay(), task.isReminder());
		tasks.add(newTask);
		return ResponseEntity.status(HttpStatus.OK).body(newTask);
	}

	@DeleteMapping(value = "/{id}")
	public void deleteTask(@PathVariable int id) {
		List<TaskDto> newTasks = new ArrayList<>();
		for (TaskDto task : tasks) {
			if (task.getId() != id) {
				newTasks.add(task);
			}
		}
		tasks = newTasks;
	}

	@PutMapping(value = "/")
	public ResponseEntity<TaskDto> updateTask(@RequestBody TaskDto task) {
		List<TaskDto> newTasks = new ArrayList<>();
		for (TaskDto tsk : tasks) {
			if (tsk.getId() == task.getId()) {
				newTasks.add(task);
			} else {
				newTasks.add(tsk);
			}
		}
		tasks = newTasks;
		return ResponseEntity.status(HttpStatus.OK).body(task);
	}
}
