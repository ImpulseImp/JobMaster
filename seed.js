"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@prisma/client");
var slugify_1 = require("slugify"); // Install using: npm install slugify
var prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var seedData, _i, seedData_1, section;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    seedData = [
                        {
                            name: 'Электричество',
                            quizzes: [
                                {
                                    title: 'Основы электричества',
                                    questions: [
                                        {
                                            text: 'В чем измеряется электрическое напряжение?',
                                            answer: 'Вольт',
                                            explanation: 'Электрическое напряжение измеряется в вольтах.',
                                            options: [
                                                { choice: 'Ом', isCorrect: false },
                                                { choice: 'Вольт', isCorrect: true },
                                                { choice: 'Ампер', isCorrect: false },
                                                { choice: 'Ватт', isCorrect: false },
                                            ],
                                        },
                                        {
                                            text: 'Что такое электрический ток?',
                                            answer: 'Движение электронов',
                                            explanation: 'Электрический ток — это движение свободных электронов.',
                                            options: [
                                                { choice: 'Движение нейтронов', isCorrect: false },
                                                { choice: 'Движение протонов', isCorrect: false },
                                                { choice: 'Движение электронов', isCorrect: true },
                                                { choice: 'Движение молекул', isCorrect: false },
                                            ],
                                        },
                                        {
                                            text: 'Какой материал считается хорошим проводником?',
                                            answer: 'Медь',
                                            explanation: 'Медь является отличным проводником электричества.',
                                            options: [
                                                { choice: 'Резина', isCorrect: false },
                                                { choice: 'Дерево', isCorrect: false },
                                                { choice: 'Медь', isCorrect: true },
                                                { choice: 'Стекло', isCorrect: false },
                                            ],
                                        },
                                        {
                                            text: 'Как называется устройство для измерения электрического напряжения?',
                                            answer: 'Вольтметр',
                                            explanation: 'Вольтметр используется для измерения электрического напряжения.',
                                            options: [
                                                { choice: 'Амперметр', isCorrect: false },
                                                { choice: 'Омметр', isCorrect: false },
                                                { choice: 'Вольтметр', isCorrect: true },
                                                { choice: 'Генератор', isCorrect: false },
                                            ],
                                        },
                                        {
                                            text: 'Что происходит, если соединить два полюса батареи?',
                                            answer: 'Батарея разрядится',
                                            explanation: 'При соединении двух полюсов батареи она быстро разряжается.',
                                            options: [
                                                { choice: 'Ничего не произойдет', isCorrect: false },
                                                { choice: 'Батарея разрядится', isCorrect: true },
                                                { choice: 'Образуется короткое замыкание', isCorrect: false },
                                                { choice: 'Появится искра', isCorrect: false },
                                            ],
                                        },
                                        {
                                            text: 'Что является единицей измерения электрического сопротивления?',
                                            answer: 'Ом',
                                            explanation: 'Сопротивление измеряется в омах.',
                                            options: [
                                                { choice: 'Вольт', isCorrect: false },
                                                { choice: 'Ом', isCorrect: true },
                                                { choice: 'Ампер', isCorrect: false },
                                                { choice: 'Джоуль', isCorrect: false },
                                            ],
                                        },
                                        {
                                            text: 'Как называется процесс передачи энергии через проводники?',
                                            answer: 'Электропередача',
                                            explanation: 'Электропередача — это процесс передачи энергии.',
                                            options: [
                                                { choice: 'Электросопротивление', isCorrect: false },
                                                { choice: 'Электропередача', isCorrect: true },
                                                { choice: 'Электрокоррекция', isCorrect: false },
                                                { choice: 'Электроизоляция', isCorrect: false },
                                            ],
                                        },
                                        {
                                            text: 'Что происходит, если увеличить напряжение в цепи?',
                                            answer: 'Ток увеличится',
                                            explanation: 'Увеличение напряжения увеличивает ток в цепи.',
                                            options: [
                                                { choice: 'Ток уменьшится', isCorrect: false },
                                                { choice: 'Ток увеличится', isCorrect: true },
                                                { choice: 'Сопротивление уменьшится', isCorrect: false },
                                                { choice: 'Батарея разрядится', isCorrect: false },
                                            ],
                                        },
                                        {
                                            text: 'Что такое конденсатор?',
                                            answer: 'Устройство для накопления заряда',
                                            explanation: 'Конденсатор используется для накопления электрического заряда.',
                                            options: [
                                                { choice: 'Устройство для измерения тока', isCorrect: false },
                                                { choice: 'Устройство для накопления заряда', isCorrect: true },
                                                {
                                                    choice: 'Устройство для создания сопротивления',
                                                    isCorrect: false,
                                                },
                                                { choice: 'Генератор', isCorrect: false },
                                            ],
                                        },
                                        {
                                            text: 'Что является источником переменного тока?',
                                            answer: 'Генератор',
                                            explanation: 'Генератор преобразует механическую энергию в электрическую.',
                                            options: [
                                                { choice: 'Батарея', isCorrect: false },
                                                { choice: 'Генератор', isCorrect: true },
                                                { choice: 'Фонарик', isCorrect: false },
                                                { choice: 'Аккумулятор', isCorrect: false },
                                            ],
                                        },
                                    ],
                                },
                                //next
                                {
                                    title: 'Основы электробезопасности',
                                    questions: [
                                        {
                                            text: 'Какое напряжение считается безопасным для человека?',
                                            answer: '12 В',
                                            explanation: 'Напряжение 12 В считается безопасным для человека.',
                                            options: [
                                                { choice: '12 В', isCorrect: true },
                                                { choice: '220 В', isCorrect: false },
                                                { choice: '110 В', isCorrect: false },
                                                { choice: '380 В', isCorrect: false },
                                            ],
                                        },
                                        {
                                            text: 'Что нужно сделать перед ремонтом электрического устройства?',
                                            answer: 'Отключить от сети',
                                            explanation: 'Безопасность требует отключения устройства от сети перед началом ремонта.',
                                            options: [
                                                { choice: 'Включить его', isCorrect: false },
                                                { choice: 'Отключить от сети', isCorrect: true },
                                                { choice: 'Проверить на исправность', isCorrect: false },
                                                { choice: 'Подключить к генератору', isCorrect: false },
                                            ],
                                        },
                                        {
                                            text: 'Что используется для защиты человека от поражения электрическим током?',
                                            answer: 'Изоляция',
                                            explanation: 'Электрическая изоляция защищает человека от поражения током.',
                                            options: [
                                                { choice: 'Изоляция', isCorrect: true },
                                                { choice: 'Металлический корпус', isCorrect: false },
                                                { choice: 'Прямое соединение с источником', isCorrect: false },
                                                { choice: 'Электроприбор', isCorrect: false },
                                            ],
                                        },
                                        {
                                            text: 'Почему важно заземление?',
                                            answer: 'Для предотвращения короткого замыкания',
                                            explanation: 'Заземление предотвращает короткое замыкание и снижает риск поражения током.',
                                            options: [
                                                { choice: 'Для увеличения мощности', isCorrect: false },
                                                {
                                                    choice: 'Для предотвращения короткого замыкания',
                                                    isCorrect: true,
                                                },
                                                { choice: 'Для экономии энергии', isCorrect: false },
                                                { choice: 'Для увеличения напряжения', isCorrect: false },
                                            ],
                                        },
                                        {
                                            text: 'Какой цвет обычно используется для заземляющего провода?',
                                            answer: 'Желтый и зеленый',
                                            explanation: 'Желто-зеленый цвет обозначает заземляющий провод.',
                                            options: [
                                                { choice: 'Желтый и зеленый', isCorrect: true },
                                                { choice: 'Красный', isCorrect: false },
                                                { choice: 'Черный', isCorrect: false },
                                                { choice: 'Белый', isCorrect: false },
                                            ],
                                        },
                                        {
                                            text: 'Какой прибор защищает от утечки тока?',
                                            answer: 'Устройство защитного отключения (УЗО)',
                                            explanation: 'УЗО автоматически отключает питание при обнаружении утечки тока.',
                                            options: [
                                                { choice: 'Амперметр', isCorrect: false },
                                                { choice: 'Вольтметр', isCorrect: false },
                                                {
                                                    choice: 'Устройство защитного отключения (УЗО)',
                                                    isCorrect: true,
                                                },
                                                { choice: 'Реле', isCorrect: false },
                                            ],
                                        },
                                        {
                                            text: 'Что необходимо проверить перед включением электроприбора?',
                                            answer: 'Целостность шнура и вилки',
                                            explanation: 'Перед использованием электроприбора нужно проверить целостность шнура и вилки.',
                                            options: [
                                                { choice: 'Мощность прибора', isCorrect: false },
                                                { choice: 'Целостность шнура и вилки', isCorrect: true },
                                                { choice: 'Тип подключения', isCorrect: false },
                                                { choice: 'Производителя', isCorrect: false },
                                            ],
                                        },
                                        {
                                            text: 'Какой фактор увеличивает риск поражения электрическим током?',
                                            answer: 'Влажная среда',
                                            explanation: 'Влажность увеличивает проводимость и риск поражения током.',
                                            options: [
                                                { choice: 'Влажная среда', isCorrect: true },
                                                { choice: 'Сухой воздух', isCorrect: false },
                                                { choice: 'Температура воздуха', isCorrect: false },
                                                { choice: 'Плотная одежда', isCorrect: false },
                                            ],
                                        },
                                        {
                                            text: 'Что нужно сделать при обнаружении оголенных проводов?',
                                            answer: 'Отключить питание и устранить проблему',
                                            explanation: 'Оголенные провода следует немедленно обезопасить, отключив питание.',
                                            options: [
                                                { choice: 'Игнорировать', isCorrect: false },
                                                { choice: 'Сообщить коллеге', isCorrect: false },
                                                {
                                                    choice: 'Отключить питание и устранить проблему',
                                                    isCorrect: true,
                                                },
                                                { choice: 'Сделать фото', isCorrect: false },
                                            ],
                                        },
                                        {
                                            text: 'Что делать, если кто-то получил удар электрическим током?',
                                            answer: 'Отключить питание и вызвать медицинскую помощь',
                                            explanation: 'При поражении электрическим током следует быстро отключить питание и вызвать медиков.',
                                            options: [
                                                { choice: 'Продолжать работу', isCorrect: false },
                                                { choice: 'Позвать начальника', isCorrect: false },
                                                {
                                                    choice: 'Отключить питание и вызвать медицинскую помощь',
                                                    isCorrect: true,
                                                },
                                                { choice: 'Дать пострадавшему воды', isCorrect: false },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            name: 'Гидравлика',
                            quizzes: [
                                {
                                    title: 'Основы гидравлики',
                                    questions: [
                                        {
                                            text: 'Что такое давление жидкости?',
                                            answer: 'Сила, действующая на поверхность жидкости',
                                            explanation: 'Давление жидкости — это сила, которая действует на поверхность.',
                                            options: [
                                                { choice: 'Сила, действующая на газ', isCorrect: false },
                                                {
                                                    choice: 'Сила, действующая на поверхность жидкости',
                                                    isCorrect: true,
                                                },
                                                { choice: 'Ускорение жидкости', isCorrect: false },
                                                { choice: 'Сопротивление жидкости', isCorrect: false },
                                            ],
                                        },
                                        {
                                            text: 'В чем измеряется давление?',
                                            answer: 'Паскаль',
                                            explanation: 'Давление измеряется в единицах Паскаль (Па).',
                                            options: [
                                                { choice: 'Ньютон', isCorrect: false },
                                                { choice: 'Паскаль', isCorrect: true },
                                                { choice: 'Вольт', isCorrect: false },
                                                { choice: 'Ампер', isCorrect: false },
                                            ],
                                        },
                                        {
                                            text: 'Как называется закон, описывающий передачу давления в жидкости?',
                                            answer: 'Закон Паскаля',
                                            explanation: 'Закон Паскаля гласит, что давление в жидкости передается равномерно во всех направлениях.',
                                            options: [
                                                { choice: 'Закон Ньютона', isCorrect: false },
                                                { choice: 'Закон Ома', isCorrect: false },
                                                { choice: 'Закон Паскаля', isCorrect: true },
                                                { choice: 'Закон Архимеда', isCorrect: false },
                                            ],
                                        },
                                        {
                                            text: 'Какая единица измеряет расход жидкости?',
                                            answer: 'Литры в секунду',
                                            explanation: 'Расход жидкости измеряется в литрах в секунду.',
                                            options: [
                                                { choice: 'Метров в секунду', isCorrect: false },
                                                { choice: 'Литры в секунду', isCorrect: true },
                                                { choice: 'Паскали', isCorrect: false },
                                                { choice: 'Ньютоны', isCorrect: false },
                                            ],
                                        },
                                        {
                                            text: 'Как называется прибор для измерения давления жидкости?',
                                            answer: 'Манометр',
                                            explanation: 'Манометр измеряет давление жидкости в системе.',
                                            options: [
                                                { choice: 'Термометр', isCorrect: false },
                                                { choice: 'Манометр', isCorrect: true },
                                                { choice: 'Барометр', isCorrect: false },
                                                { choice: 'Гигрометр', isCorrect: false },
                                            ],
                                        },
                                        {
                                            text: 'Какая характеристика жидкости влияет на её текучесть?',
                                            answer: 'Вязкость',
                                            explanation: 'Вязкость определяет сопротивление жидкости при ее текучести.',
                                            options: [
                                                { choice: 'Температура', isCorrect: false },
                                                { choice: 'Давление', isCorrect: false },
                                                { choice: 'Вязкость', isCorrect: true },
                                                { choice: 'Скорость', isCorrect: false },
                                            ],
                                        },
                                        {
                                            text: 'Что происходит, если давление в жидкости превышает критическую точку?',
                                            answer: 'Образуется разрыв системы',
                                            explanation: 'Избыточное давление приводит к разрыву системы.',
                                            options: [
                                                { choice: 'Ничего не произойдет', isCorrect: false },
                                                { choice: 'Поток ускоряется', isCorrect: false },
                                                { choice: 'Образуется разрыв системы', isCorrect: true },
                                                { choice: 'Давление уменьшается', isCorrect: false },
                                            ],
                                        },
                                        {
                                            text: 'Какой принцип работы используется в гидравлическом прессе?',
                                            answer: 'Передача давления по жидкости',
                                            explanation: 'Гидравлический пресс работает по принципу передачи давления через жидкость.',
                                            options: [
                                                { choice: 'Испарение жидкости', isCorrect: false },
                                                { choice: 'Передача давления по жидкости', isCorrect: true },
                                                { choice: 'Сопротивление жидкости', isCorrect: false },
                                                { choice: 'Вращение потока', isCorrect: false },
                                            ],
                                        },
                                        {
                                            text: 'Что влияет на скорость потока жидкости в трубе?',
                                            answer: 'Диаметр трубы',
                                            explanation: 'Скорость потока жидкости зависит от диаметра трубы и давления.',
                                            options: [
                                                { choice: 'Цвет трубы', isCorrect: false },
                                                { choice: 'Материал жидкости', isCorrect: false },
                                                { choice: 'Диаметр трубы', isCorrect: true },
                                                { choice: 'Температура воздуха', isCorrect: false },
                                            ],
                                        },
                                        {
                                            text: 'Какое устройство увеличивает давление в гидравлической системе?',
                                            answer: 'Насос',
                                            explanation: 'Насос предназначен для увеличения давления жидкости в системе.',
                                            options: [
                                                { choice: 'Резервуар', isCorrect: false },
                                                { choice: 'Фильтр', isCorrect: false },
                                                { choice: 'Насос', isCorrect: true },
                                                { choice: 'Термостат', isCorrect: false },
                                            ],
                                        },
                                    ],
                                },
                                {
                                    title: 'Применение гидравлики',
                                    questions: [
                                        {
                                            text: 'Как называется гидравлическое устройство, увеличивающее давление?',
                                            answer: 'Насос',
                                            explanation: 'Насос используется для увеличения давления жидкости в гидравлической системе.',
                                            options: [
                                                { choice: 'Насос', isCorrect: true },
                                                { choice: 'Резервуар', isCorrect: false },
                                                { choice: 'Фильтр', isCorrect: false },
                                                { choice: 'Вентиль', isCorrect: false },
                                            ],
                                        },
                                        {
                                            text: 'Какая жидкость чаще всего используется в гидравлических системах?',
                                            answer: 'Масло',
                                            explanation: 'Масло используется благодаря своей вязкости и стабильности.',
                                            options: [
                                                { choice: 'Вода', isCorrect: false },
                                                { choice: 'Масло', isCorrect: true },
                                                { choice: 'Газ', isCorrect: false },
                                                { choice: 'Топливо', isCorrect: false },
                                            ],
                                        },
                                        {
                                            text: 'Какой закон лежит в основе работы гидравлического пресса?',
                                            answer: 'Закон Паскаля',
                                            explanation: 'Гидравлический пресс работает по закону Паскаля, который описывает равномерное распределение давления.',
                                            options: [
                                                { choice: 'Закон Ома', isCorrect: false },
                                                { choice: 'Закон Ньютона', isCorrect: false },
                                                { choice: 'Закон Паскаля', isCorrect: true },
                                                { choice: 'Закон Архимеда', isCorrect: false },
                                            ],
                                        },
                                        {
                                            text: 'Как называется устройство, позволяющее контролировать поток жидкости?',
                                            answer: 'Клапан',
                                            explanation: 'Клапан используется для регулировки потока жидкости в гидравлической системе.',
                                            options: [
                                                { choice: 'Насос', isCorrect: false },
                                                { choice: 'Клапан', isCorrect: true },
                                                { choice: 'Резервуар', isCorrect: false },
                                                { choice: 'Манометр', isCorrect: false },
                                            ],
                                        },
                                        {
                                            text: 'Какая часть гидравлической системы отвечает за хранение жидкости?',
                                            answer: 'Резервуар',
                                            explanation: 'Резервуар используется для хранения жидкости в гидравлической системе.',
                                            options: [
                                                { choice: 'Насос', isCorrect: false },
                                                { choice: 'Клапан', isCorrect: false },
                                                { choice: 'Резервуар', isCorrect: true },
                                                { choice: 'Фильтр', isCorrect: false },
                                            ],
                                        },
                                        {
                                            text: 'Что происходит с гидравлической жидкостью при высокой температуре?',
                                            answer: 'Снижается вязкость',
                                            explanation: 'Высокая температура снижает вязкость гидравлической жидкости.',
                                            options: [
                                                { choice: 'Увеличивается давление', isCorrect: false },
                                                { choice: 'Снижается вязкость', isCorrect: true },
                                                { choice: 'Жидкость испаряется', isCorrect: false },
                                                { choice: 'Жидкость становится тверже', isCorrect: false },
                                            ],
                                        },
                                        {
                                            text: 'Какой параметр важен при выборе гидравлической жидкости?',
                                            answer: 'Вязкость',
                                            explanation: 'Вязкость — ключевой параметр при выборе гидравлической жидкости.',
                                            options: [
                                                { choice: 'Плотность', isCorrect: false },
                                                { choice: 'Цвет', isCorrect: false },
                                                { choice: 'Вязкость', isCorrect: true },
                                                { choice: 'Электропроводность', isCorrect: false },
                                            ],
                                        },
                                        {
                                            text: 'Какое устройство используется для очистки гидравлической жидкости?',
                                            answer: 'Фильтр',
                                            explanation: 'Фильтр очищает гидравлическую жидкость от загрязнений.',
                                            options: [
                                                { choice: 'Резервуар', isCorrect: false },
                                                { choice: 'Фильтр', isCorrect: true },
                                                { choice: 'Манометр', isCorrect: false },
                                                { choice: 'Насос', isCorrect: false },
                                            ],
                                        },
                                        {
                                            text: 'Для чего используется манометр в гидравлической системе?',
                                            answer: 'Измерение давления',
                                            explanation: 'Манометр предназначен для измерения давления жидкости в гидравлической системе.',
                                            options: [
                                                { choice: 'Очистка жидкости', isCorrect: false },
                                                { choice: 'Измерение давления', isCorrect: true },
                                                { choice: 'Хранение жидкости', isCorrect: false },
                                                { choice: 'Регулировка температуры', isCorrect: false },
                                            ],
                                        },
                                        {
                                            text: 'Что происходит при утечке жидкости в гидравлической системе?',
                                            answer: 'Понижается давление',
                                            explanation: 'Утечка приводит к снижению давления в системе.',
                                            options: [
                                                { choice: 'Повышается вязкость', isCorrect: false },
                                                { choice: 'Понижается давление', isCorrect: true },
                                                { choice: 'Система ускоряется', isCorrect: false },
                                                { choice: 'Образуются пузырьки', isCorrect: false },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            name: 'Охрана труда на производстве',
                            quizzes: [
                                {
                                    title: 'Основы охраны труда',
                                    questions: [
                                        {
                                            text: 'Что входит в обязанности работника по охране труда?',
                                            answer: 'Соблюдение правил безопасности',
                                            explanation: 'Работник обязан строго соблюдать правила безопасности для предотвращения несчастных случаев.',
                                            options: [
                                                { choice: 'Организация собраний', isCorrect: false },
                                                { choice: 'Соблюдение правил безопасности', isCorrect: true },
                                                { choice: 'Руководство коллегами', isCorrect: false },
                                                { choice: 'Контроль оборудования', isCorrect: false },
                                            ],
                                        },
                                        {
                                            text: 'Какой документ регулирует охрану труда на производстве?',
                                            answer: 'Трудовой кодекс',
                                            explanation: 'Трудовой кодекс содержит основные положения и правила по охране труда.',
                                            options: [
                                                { choice: 'Устав компании', isCorrect: false },
                                                { choice: 'Трудовой кодекс', isCorrect: true },
                                                { choice: 'Финансовый отчет', isCorrect: false },
                                                { choice: 'Программа обучения', isCorrect: false },
                                            ],
                                        },
                                        {
                                            text: 'Кто несет ответственность за соблюдение правил охраны труда?',
                                            answer: 'Работник и работодатель',
                                            explanation: 'Ответственность за соблюдение правил охраны труда лежит как на работнике, так и на работодателе.',
                                            options: [
                                                { choice: 'Только работник', isCorrect: false },
                                                { choice: 'Только работодатель', isCorrect: false },
                                                { choice: 'Работник и работодатель', isCorrect: true },
                                                { choice: 'Орган инспекции', isCorrect: false },
                                            ],
                                        },
                                        {
                                            text: 'Что нужно сделать перед началом работы на новом оборудовании?',
                                            answer: 'Пройти обучение и инструктаж',
                                            explanation: 'Перед использованием нового оборудования необходимо пройти обучение и инструктаж.',
                                            options: [
                                                { choice: 'Запустить оборудование', isCorrect: false },
                                                { choice: 'Пройти обучение и инструктаж', isCorrect: true },
                                                {
                                                    choice: 'Проверить совместимость оборудования',
                                                    isCorrect: false,
                                                },
                                                { choice: 'Обсудить с коллегами', isCorrect: false },
                                            ],
                                        },
                                        {
                                            text: 'Почему важно использовать защитные средства на рабочем месте?',
                                            answer: 'Для предотвращения травм и несчастных случаев',
                                            explanation: 'Защитные средства помогают снизить риск травм и обеспечить безопасность.',
                                            options: [
                                                { choice: 'Для увеличения комфорта', isCorrect: false },
                                                {
                                                    choice: 'Для предотвращения травм и несчастных случаев',
                                                    isCorrect: true,
                                                },
                                                {
                                                    choice: 'Для повышения производительности',
                                                    isCorrect: false,
                                                },
                                                { choice: 'Для улучшения дизайна', isCorrect: false },
                                            ],
                                        },
                                        {
                                            text: 'Какой шаг следует предпринять при аварийной ситуации на производстве?',
                                            answer: 'Сообщить руководству и эвакуироваться',
                                            explanation: 'При аварии необходимо сообщить руководству и следовать инструкциям по эвакуации.',
                                            options: [
                                                { choice: 'Игнорировать ситуацию', isCorrect: false },
                                                {
                                                    choice: 'Сообщить руководству и эвакуироваться',
                                                    isCorrect: true,
                                                },
                                                { choice: 'Продолжить работу', isCorrect: false },
                                                { choice: 'Составить отчет самостоятельно', isCorrect: false },
                                            ],
                                        },
                                        {
                                            text: 'Как часто нужно проходить инструктаж по охране труда?',
                                            answer: 'Перед началом работы и регулярно',
                                            explanation: 'Инструктаж проводится перед началом работы и периодически для обновления знаний.',
                                            options: [
                                                { choice: 'Только при устройстве на работу', isCorrect: false },
                                                { choice: 'Перед началом работы и регулярно', isCorrect: true },
                                                { choice: 'Ежегодно', isCorrect: false },
                                                { choice: 'Только при смене должности', isCorrect: false },
                                            ],
                                        },
                                        {
                                            text: 'Что делать, если обнаружены нарушения правил охраны труда?',
                                            answer: 'Сообщить руководству и устранить нарушения',
                                            explanation: 'В случае выявления нарушений необходимо сообщить руководству и работать над их устранением.',
                                            options: [
                                                { choice: 'Игнорировать нарушения', isCorrect: false },
                                                {
                                                    choice: 'Сообщить руководству и устранить нарушения',
                                                    isCorrect: true,
                                                },
                                                { choice: 'Составить жалобу в инспекцию', isCorrect: false },
                                                { choice: 'Продолжить работу', isCorrect: false },
                                            ],
                                        },
                                        {
                                            text: 'Какой знак на производстве указывает на опасность?',
                                            answer: 'Предупреждающий знак',
                                            explanation: 'Предупреждающие знаки используются для обозначения потенциальных опасностей.',
                                            options: [
                                                { choice: 'Информационный знак', isCorrect: false },
                                                { choice: 'Предупреждающий знак', isCorrect: true },
                                                { choice: 'Запретительный знак', isCorrect: false },
                                                { choice: 'Рекламный знак', isCorrect: false },
                                            ],
                                        },
                                        {
                                            text: 'Какой фактор может увеличить риск травмы на производстве?',
                                            answer: 'Невнимательность работников',
                                            explanation: 'Невнимательность или нарушение правил может привести к травмам.',
                                            options: [
                                                { choice: 'Соблюдение правил безопасности', isCorrect: false },
                                                { choice: 'Невнимательность работников', isCorrect: true },
                                                { choice: 'Использование защитных средств', isCorrect: false },
                                                { choice: 'Постоянный инструктаж', isCorrect: false },
                                            ],
                                        },
                                    ],
                                },
                                {
                                    title: 'Техника безопасности на рабочем месте',
                                    questions: [
                                        {
                                            text: 'Почему важно использовать защитные очки при работе?',
                                            answer: 'Для защиты глаз от повреждений',
                                            explanation: 'Защитные очки предотвращают повреждения глаз от пыли, осколков и других опасностей.',
                                            options: [
                                                { choice: 'Для увеличения зрения', isCorrect: false },
                                                { choice: 'Для защиты глаз от повреждений', isCorrect: true },
                                                { choice: 'Для комфорта', isCorrect: false },
                                                { choice: 'Для эстетики', isCorrect: false },
                                            ],
                                        },
                                        {
                                            text: 'Что следует сделать при пожаре на рабочем месте?',
                                            answer: 'Эвакуироваться и сообщить руководителю',
                                            explanation: 'При пожаре важно немедленно эвакуироваться и уведомить руководство.',
                                            options: [
                                                { choice: 'Игнорировать пожар', isCorrect: false },
                                                { choice: 'Продолжать работу', isCorrect: false },
                                                {
                                                    choice: 'Эвакуироваться и сообщить руководителю',
                                                    isCorrect: true,
                                                },
                                                { choice: 'Использовать электроприборы', isCorrect: false },
                                            ],
                                        },
                                        {
                                            text: 'Какие действия запрещено выполнять без соответствующего обучения?',
                                            answer: 'Работа на сложном оборудовании',
                                            explanation: 'Работа на сложном оборудовании без соответствующего обучения может привести к травмам.',
                                            options: [
                                                { choice: 'Запись отчетов', isCorrect: false },
                                                { choice: 'Работа на сложном оборудовании', isCorrect: true },
                                                { choice: 'Сортировка документов', isCorrect: false },
                                                { choice: 'Подготовка презентаций', isCorrect: false },
                                            ],
                                        },
                                        {
                                            text: 'Что нужно проверить перед началом работы с инструментами?',
                                            answer: 'Исправность инструментов',
                                            explanation: 'Проверка инструментов на исправность помогает избежать несчастных случаев.',
                                            options: [
                                                { choice: 'Срок годности инструментов', isCorrect: false },
                                                { choice: 'Исправность инструментов', isCorrect: true },
                                                { choice: 'Количество инструментов', isCorrect: false },
                                                { choice: 'Упаковка инструментов', isCorrect: false },
                                            ],
                                        },
                                        {
                                            text: 'Почему важно правильно хранить химические вещества?',
                                            answer: 'Для предотвращения утечек и повреждений',
                                            explanation: 'Правильное хранение химических веществ снижает риск утечек и повреждений.',
                                            options: [
                                                { choice: 'Для удобного доступа', isCorrect: false },
                                                {
                                                    choice: 'Для предотвращения утечек и повреждений',
                                                    isCorrect: true,
                                                },
                                                { choice: 'Для экономии места', isCorrect: false },
                                                { choice: 'Для улучшения дизайна склада', isCorrect: false },
                                            ],
                                        },
                                        {
                                            text: 'Какой знак обозначает обязательное использование средств защиты?',
                                            answer: 'Обязательный знак',
                                            explanation: 'Обязательные знаки указывают на необходимость использования средств защиты.',
                                            options: [
                                                { choice: 'Информационный знак', isCorrect: false },
                                                { choice: 'Обязательный знак', isCorrect: true },
                                                { choice: 'Запретительный знак', isCorrect: false },
                                                { choice: 'Предупреждающий знак', isCorrect: false },
                                            ],
                                        },
                                        {
                                            text: 'Что следует делать в случае падения тяжелого предмета на производстве?',
                                            answer: 'Убедиться в безопасности и сообщить руководителю',
                                            explanation: 'При падении предмета важно сначала убедиться в безопасности окружающих, а затем сообщить руководству.',
                                            options: [
                                                { choice: 'Игнорировать инцидент', isCorrect: false },
                                                {
                                                    choice: 'Убедиться в безопасности и сообщить руководителю',
                                                    isCorrect: true,
                                                },
                                                { choice: 'Поднять предмет самостоятельно', isCorrect: false },
                                                { choice: 'Вызвать службу эвакуации', isCorrect: false },
                                            ],
                                        },
                                        {
                                            text: 'Почему важно поддерживать порядок на рабочем месте?',
                                            answer: 'Для предотвращения несчастных случаев',
                                            explanation: 'Поддержание порядка снижает риск падений и других несчастных случаев.',
                                            options: [
                                                { choice: 'Для увеличения скорости работы', isCorrect: false },
                                                {
                                                    choice: 'Для предотвращения несчастных случаев',
                                                    isCorrect: true,
                                                },
                                                { choice: 'Для удобства начальника', isCorrect: false },
                                                { choice: 'Для эстетического эффекта', isCorrect: false },
                                            ],
                                        },
                                        {
                                            text: 'Что необходимо делать при использовании электрооборудования?',
                                            answer: 'Соблюдать инструкцию по эксплуатации',
                                            explanation: 'Соблюдение инструкции помогает избежать поломок и несчастных случаев.',
                                            options: [
                                                { choice: 'Игнорировать инструкцию', isCorrect: false },
                                                {
                                                    choice: 'Соблюдать инструкцию по эксплуатации',
                                                    isCorrect: true,
                                                },
                                                { choice: 'Использовать только ночью', isCorrect: false },
                                                { choice: 'Отключать каждую минуту', isCorrect: false },
                                            ],
                                        },
                                        {
                                            text: 'Что делать при обнаружении повреждений на рабочем оборудовании?',
                                            answer: 'Сообщить руководителю и остановить использование',
                                            explanation: 'При обнаружении повреждений оборудование следует остановить и уведомить руководство.',
                                            options: [
                                                { choice: 'Использовать осторожно', isCorrect: false },
                                                {
                                                    choice: 'Сообщить руководителю и остановить использование',
                                                    isCorrect: true,
                                                },
                                                { choice: 'Игнорировать повреждения', isCorrect: false },
                                                { choice: 'Починить самостоятельно', isCorrect: false },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                    ];
                    _i = 0, seedData_1 = seedData;
                    _a.label = 1;
                case 1:
                    if (!(_i < seedData_1.length)) return [3 /*break*/, 4];
                    section = seedData_1[_i];
                    return [4 /*yield*/, prisma.quizCategory.create({
                            data: {
                                title: section.name,
                                description: "\u0412\u0438\u043A\u0442\u043E\u0440\u0438\u043D\u044B, \u0441\u0432\u044F\u0437\u0430\u043D\u043D\u044B\u0435 \u0441 \u0442\u0435\u043C\u043E\u0439: ".concat(section.name, "."),
                                quizzes: {
                                    create: section.quizzes.map(function (quiz) { return ({
                                        title: quiz.title,
                                        slug: (0, slugify_1.default)(quiz.title, { lower: true, strict: true }),
                                        description: "".concat(quiz.title, " \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435."),
                                        questions: {
                                            create: quiz.questions.map(function (question) { return ({
                                                question: question.text,
                                                answer: question.answer,
                                                explanation: question.explanation,
                                                options: { create: question.options },
                                            }); }),
                                        },
                                    }); }),
                                },
                            },
                        })];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    _i++;
                    return [3 /*break*/, 1];
                case 4:
                    console.log('База данных успешно заполнена!');
                    return [2 /*return*/];
            }
        });
    });
}
// Execute the seed script
main()
    .catch(function (e) {
    console.error(e);
    process.exit(1);
})
    .finally(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma.$disconnect()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
