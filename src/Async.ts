/*
Создайте функцию mock, которая принимает на вход аргумент number (количество миллисекунд) и возвращает Promise,
который завершится через заданное количество миллисекунд со значением, переданным в аргумент.
 */
export function mock(ms: number): Promise<number> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(ms);
        }, ms);
    });
}

/*
Перепишите функцию getData так, чтобы она выполнялась быстрее.
 */
export async function getData(): Promise<number[]> {
    // Запускаем все таймеры параллельно, а не последовательно
    return Promise.all([mock(100), mock(200), mock(300)]);
}

/*
Исправьте функцию catchException так, чтобы блок try/catch обрабатывал
завершенный с ошибкой Promise и возвращал текст ошибки.
 */
export async function catchException(): Promise<string | undefined> {
    try {
        // Используем await, чтобы ошибка отклоненного промиса попала в блок catch
        await Promise.reject(new Error('my error'));
    } catch (err) {
        // Приводим тип err к Error для корректной работы TypeScript
        return (err as Error).message;
    }
}
