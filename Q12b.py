import random

def draw_two_letters():
    letters = list('abcdefghijklmnopqrstuvwxyz')
    vowels = set('aeiou')
    drawn_letters = random.sample(letters, 2)
    is_vowel = lambda ch: ch in vowels
    return is_vowel(drawn_letters[0]) != is_vowel(drawn_letters[1])

def estimate_probability(num_trials):
    count = sum(draw_two_letters() for _ in range(num_trials))
    return count / num_trials

# Run the experiment 10000 times
num_trials = 10000
probability = estimate_probability(num_trials)
print(f"Estimated probability: {probability:.4f}")
