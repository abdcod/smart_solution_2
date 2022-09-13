# Задача на получение n-ого числа Фибоначчи

## Условия

Написать функцию, которая при получении числа (n) возвращала n-ое число в последовательности Фибоначчи.

Пример:
```
nthFibo(4) == 2
```

## Решение:

Нам всегда надо складывать два числа и получать третье.  
Есть закономерность - первое по порядку из тройки всегда отпадает и уже не нужно для следующей операции.  
Таким образом, его можно переопределять в следующей итерации цикла.  
Но при этом сама переменная для этого перезаписываемого первого числа из тройки будет чередоваться.  
Поэтому я прописал разный алгоритм работы для чётных и нечётных итераций.

```  
function nthFibo(n) {
  if (n === 1) return 0; // эти первые два числа фибоначчи я прописал как исключения из моего алгоритма
  if (n === 2) return 1; // --//--
  
  let sum = 0; // одно число для операций
  let sum_1 = 1; // другое число для операций
  
  let i = 1; // счётчик цикла начинаем от 1, а не от 0 - это поможет нам посчитать: четная сейчас итерация или нечётная
```

n сразу даёт нам подсказку для высчитывания сколько нам нужно итераций для цикла.  
При этом позиции 1 и 2 - это исключения.  
Поэтому цикл будет включаться при запросе числа от 3 и выше.  
Таким образом, формула для подсчёта количества необходимых итераций = (n-2),
но из-за того, что i начинается от 1, в условиях цикла это выглядит как (n-1)
  
```
  while (i < (n - 1)) 
    {
      if (i % 2 === 1) // для нечетных итераций делай следующее:
        {
          sum = sum + sum_1; // после этой операции sum_1 становится неактуальна, её можно будет перезаписать в следующей (чётной) итерации
        }
      else // для нечетных итераций делай следующее: 
        {
          sum_1 = sum_1 + sum; // Наоборот, здесь уже можно будет перезаписать sum в следующей (чётной) итерации
        }
      i++;
    }
  if (n % 2 === 1) // для return важно выяснить: четная или нечетная итерация была последней, чтобы понимать, что именно надо вернуть
    {
      return sum;
    }
  else return sum_1;
}
```
