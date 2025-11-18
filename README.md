## Первый шаги установка необходимых зависимотей

Создать проект
```cmd
npm init -y
```

Установка зависимостей
```cmd
npm install express pg 
```

## Создание базой данных

Команда для создание данных:
```sql

-- Таблица студент
create table if not exists students  (
	id SERIAL primary key,
	name TEXT not null,
	birth_date DATE not null,
	group_name TEXT
);

-- Таблица предметов
create table if not exists subjects (
	id SERIAL primary key,
	name TEXT not null,
	teacher TEXT not null
);


-- Таблица оценок
create table if not exists grades (
	id SERIAL primary key,
	student_id INTEGER not null references students(id) on delete cascade,
	subject_id INTEGER not null references subjects(id) on delete cascade,
	grade numeric not null check( grade >= 1 and grade <= 5 )
);

```