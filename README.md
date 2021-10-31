# Trackbit

## Spis treści
1. Słownik pojęć
1. Opis ogólny
1. Wymagania funkcjonalne
1. Wymagania jakosciowe
1. Przykładowe przypadki użycia
1. Wykorzystane technologie
1. Architektura systemu
  
## Słownik pojęć
 Trackbit - nazwa aplikacji
 forma - pole nawyku do wypełnienia
 
## Opis ogólny

Trackbit jest minimalistycznym, lecz dającym szerokie możliwości narzędziem do śledzenia nawyków. Użytkownik samodzielnie wybiera jaki nawyk chce śledzić.
Oprócz przygotowanych szablonów nawyków, użytkownik będzie miał też możliwość tworzenia własnych nawyków, gdzie będzie mógł samodzielnie skonfigurować nowy nawyk. Habit Tracker będzie przedstawiał wyniki użytkownika w postaci diagramów, wykresów itp. Oprócz tego użytkownicy będą mogli dodawać się do znajomych w aplikacji i porównywać swoje wyniki oraz osiągnięcia.  
Aplikacja będzie przedstawiona w formie kalendarza. Do każdego dnia oprócz nawyku użytkownik będzie miał do dyspozycji pole do zanotowania najważniejszych informacji, niekoniecznie związanych z nawykami/aktywnością fizyczną, w formie notatki.
Wszystkie dane użytkownika są bezpieczne, dostępne tylko dla niego. Chyba, że zdecyduje się na udostępnienie wyników w celu porównania ich z innymi użytkownikami aplikacji.

## Wymagania funkcjonalne

#### Użytkownik korzysta z trzech widoków:
1. **Widok kalendarza**
    1. Użytkownik wybiera formy śledzenia dla poszczególnych nawyków/aktywności fizycznych:
    1. Poprzez samodzielne wpisanie w poszczególne pola określonych wartości
        1. Poprzez wybór tak/nie
        1. Poprzez wybór z listy określonych opcji 
        1. Poprzez wypełnienie określonych pól
        1. Automatycznie, za pomocą urządzenia zewnętrznego (np. smartwatch)
    1. Użytkownik może cofnąć się do poprzednich dni i zobaczyć jakie aktywności zrealizował. Dodatkowo przy każdym dniu ma możliwość zamieszczenia komentarza.
1. **Widok konfiguracji nawyków**
    1. Umożliwia dodanie własnych nawyków lub wybranie ich z gotowych szablonów
    1. Wśród domyślnych szablonów gotowych dla użytkownika są:
        1. Dieta: rozpiska kaloryczna dla każdego posiłku, spożycie cukru, dzienna ilość szklanek wody
        1. Ćwiczenia: regularność ćwiczeń, rodzaj ćwiczeń
        1. Styl życia: długość snu, długość pracy, waga, wskaźnik BMI
        1. Zdrowie psychiczne: emocje, samopoczucie, nastrój, poziom stresu
1. **Widok raportów**
    1. Użytkownik wybiera, które nawyki mają zostać przedstawione w formie raportu.
    1. Aplikacja automatycznie generuje raporty dla użytkownika (dostępne są raporty dzienne, tygodniowe i miesięczne)
    1. Użytkownik może wyeksportować raport do pliku w formie pdf lub wysłać na email.

## Wymagania jakosciowe

* System działa szybko, dzięki swojej prostocie oraz możliwości konfiguracji przez użytkownika,
* Aplikacja jest bezpieczna, gdyż dane użytkowników są anonimowo przechowywane w bazie danych, z możliwością ich całkowitego skasowania. 
* Interfejs graficzny będzie przystępny oraz nieskomplikowany,
* Docelowo oprócz polskiej wersji językowej pojawi się też anglojęzyczna,
* Aplikacja będzie kompatybilna ze wszystkimi popularnymi przeglądarkami takimi jak: Chrome, Firefox, Opera.

## Przykładowe przypadki użycia

#### Użytkownik konfiguruje nawyk spośród dostępnych szablonów:
1. Wchodzi w zakładkę "nawyki"
2. Wybiera opcję "nowy nawyk"
3. Wybiera opcję "Wybierz z dostępnych wzorów"
4. Wybiera zakładkę "Styl życia" a następnie opcje "Długość pracy"
5. Po wybraniu tego szablonu wyświetli się komunikat "Nawyk został pomyślnie dodany"
#### Użytkownik wypełnia formę nawyku ,,Długość pracy”
1. Wchodzi w zakładkę "kalendarz"
2. Wybiera opcję konkretny dzień
3. Wybiera opcję "Długość pracy”
4. Użytkownik wpisuje swój czas pracy (np. 9 godzin 40 minut)
5. Wybiera opcję "Zatwierdź”
#### Użytkownik pobiera raport z nawyku ,,Długość pracy”
1. Wchodzi w zakładkę "wyniki"
2. Wybiera opcję "Wybierz nawyk"
3. Wybiera opcję "Długość pracy"
4. Raport dla nawyku "Długość pracy" zostaje wygenerowany

## Wykorzystane technologie
1. Aplikacja w podstawowej wersji zostanie wydana w formie webowej
    * Front-end: HTML, CSS
    * Back-end: Java Script, SQL
1. W rozszerzonej wersji aplikacja zostanie wydana w formie aplikacji desktopowej oraz na telefony z systemami Android i IOS

## Architektura systemu

Użytkownik ma dostęp do kreatora form który pozwala na wybranie/stworzenie nawyków do  śledzenia. Formy wybranych nawyków dostępne są w kalendarzu wypełnianym przez użytkownika. Dane są zapisywane w bazie danych, z której są pobierane w formie raportu do wglądu użytkownika.
