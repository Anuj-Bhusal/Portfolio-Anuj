import random

def has_shared_birthday(num_students, num_days=365):
    birthdays = [random.randint(1, num_days) for _ in range(num_students)]
    return len(birthdays) != len(set(birthdays))

def estimate_probability(num_trials, num_students):
    shared_count = sum(has_shared_birthday(num_students) for _ in range(num_trials))
    return shared_count / num_trials

# Parameters
num_students = 100 # Change to other values like 23 to see different probabilities
num_trials = 10000  # Adjust trials to see variability

# Run the simulation
probability = estimate_probability(num_trials, num_students)
print(f"Estimated probability of at least one shared birthday: {probability:.20f}")
