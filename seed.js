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
                                            text: 'Что описывает закон Ома?',
                                            options: [
                                                { text: 'Ток = Напряжение x Сопротивление', isCorrect: false },
                                                { text: 'Сопротивление = Ток / Напряжение', isCorrect: false },
                                                { text: 'Напряжение = Ток x Сопротивление', isCorrect: true },
                                                { text: 'Ток = Напряжение / Сопротивление', isCorrect: false },
                                            ],
                                            answer: 'Напряжение = Ток x Сопротивление',
                                        },
                                        {
                                            text: 'Какая единица измерения мощности?',
                                            options: [
                                                { text: 'Ампер', isCorrect: false },
                                                { text: 'Ватт', isCorrect: true },
                                                { text: 'Ом', isCorrect: false },
                                                { text: 'Вольт', isCorrect: false },
                                            ],
                                            answer: 'Ватт',
                                        },
                                    ],
                                },
                                {
                                    title: 'Сложные электрические цепи',
                                    questions: [
                                        {
                                            text: 'Что накапливает конденсатор?',
                                            options: [
                                                { text: 'Тепловую энергию', isCorrect: false },
                                                { text: 'Электрическую энергию', isCorrect: true },
                                                { text: 'Механическую энергию', isCorrect: false },
                                                { text: 'Химическую энергию', isCorrect: false },
                                            ],
                                            answer: 'Электрическую энергию',
                                        },
                                        {
                                            text: 'Какая единица измерения индуктивности?',
                                            options: [
                                                { text: 'Фарад', isCorrect: false },
                                                { text: 'Генри', isCorrect: true },
                                                { text: 'Ом', isCorrect: false },
                                                { text: 'Ватт', isCorrect: false },
                                            ],
                                            answer: 'Генри',
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
                                            text: 'Какой закон лежит в основе гидравлических систем?',
                                            options: [
                                                { text: 'Закон Архимеда', isCorrect: false },
                                                { text: 'Закон Паскаля', isCorrect: true },
                                                { text: 'Закон Бернулли', isCorrect: false },
                                                { text: 'Закон сохранения массы', isCorrect: false },
                                            ],
                                            answer: 'Закон Паскаля',
                                        },
                                        {
                                            text: 'Какая единица измеряет вязкость в СИ?',
                                            options: [
                                                { text: 'Ньютон-секунда', isCorrect: false },
                                                { text: 'Паскаль-секунда', isCorrect: true },
                                                { text: 'Ватт', isCorrect: false },
                                                { text: 'Ом', isCorrect: false },
                                            ],
                                            answer: 'Паскаль-секунда',
                                        },
                                    ],
                                },
                                {
                                    title: 'Гидравлические системы',
                                    questions: [
                                        {
                                            text: 'Что делает гидравлический аккумулятор?',
                                            options: [
                                                { text: 'Регулирует давление', isCorrect: false },
                                                {
                                                    text: 'Хранит энергию в гидравлической системе',
                                                    isCorrect: true,
                                                },
                                                { text: 'Измеряет скорость потока', isCorrect: false },
                                                { text: 'Повышает температуру жидкости', isCorrect: false },
                                            ],
                                            answer: 'Хранит энергию в гидравлической системе',
                                        },
                                        {
                                            text: 'Какая формула описывает уравнение непрерывности?',
                                            options: [
                                                {
                                                    text: 'Скорость потока увеличивается в широких трубах',
                                                    isCorrect: false,
                                                },
                                                {
                                                    text: 'Поток остается постоянным во всех точках',
                                                    isCorrect: true,
                                                },
                                                {
                                                    text: 'Давление возрастает при уменьшении диаметра',
                                                    isCorrect: false,
                                                },
                                                {
                                                    text: 'Скорость жидкости пропорциональна давлению',
                                                    isCorrect: false,
                                                },
                                            ],
                                            answer: 'Поток остается постоянным во всех точках',
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
                                        description: "".concat(quiz.title, " \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435."),
                                        questions: {
                                            create: quiz.questions.map(function (question) { return ({
                                                text: question.text,
                                                answer: question.answer,
                                                options: {
                                                    create: question.options,
                                                },
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
