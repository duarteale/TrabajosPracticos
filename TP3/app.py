# Cambiar el ID numerico por el uuid4.
# Agregar estilo de Boostrap.
# Agregar layout.html, EXTENDS, BLOCK.
# Guardar y Leer los datos con las funciones que estan dentro de el archivo toJSON. Moficar la funcion
# guardar_lista_diccionarios_como_json para que me mantenga los datos y no los sobreescriba, o bien arbitrar
# un metodo de guardado que cumpla la misma funcion. 


from flask import Flask, render_template, request, redirect
from uuid import uuid4

app = Flask(__name__)

# Lista de tareas (simulación de una base de datos)
tasks = [
    {"id": 1, "title": "Tarea 1", "description": "Descripción de la tarea 1"},
    {"id": 2, "title": "Tarea 2", "description": "Descripción de la tarea 2"},
    {"id": 3, "title": "Tarea 3", "description": "Descripción de la tarea 3"}
]
next_task_id = 4  # ID de la próxima tarea a crear


@app.route("/")
def index():
    return render_template("index.html", tasks=tasks)


@app.route("/create", methods=["GET", "POST"])
def create():
    global next_task_id

    if request.method == "POST":
        title = request.form["title"]
        description = request.form["description"]
        task = {"id": next_task_id, "title": title, "description": description}
        tasks.append(task)
        next_task_id += 1
        return redirect("/")
    else:
        return render_template("create.html")


@app.route("/edit/<int:task_id>", methods=["GET", "POST"])
def edit(task_id):

    isNotExist = False
    for task in tasks:
        if task["id"] == task_id:
            if request.method == "POST":
                task["title"] = request.form["title"]
                task["description"] = request.form["description"]
                return redirect("/")
            else:
                return render_template("edit.html", task=task)
        else:
            isNotExist = True
    
    if isNotExist: return "Tarea no encontrada"

    # task = next((task for task in tasks if task["id"] == task_id), None)
    # if task is None: 
    #     return "Tarea no encontrada"

    # if request.method == "POST":
    #     task["title"] = request.form["title"]
    #     task["description"] = request.form["description"]
    #     return redirect("/")
    # else:
    #     return render_template("edit.html", task=task)


@app.route("/delete/<int:task_id>")
def delete(task_id):
    global tasks
    tasks = [task for task in tasks if task["id"] != task_id]
    return redirect("/")


if __name__ == "__main__":
    app.run(debug=True)
