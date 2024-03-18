import os

def print_directory_structure(folder_path, indent=''):
    print(f"{indent}- {os.path.basename(folder_path)}")
    indent += '  '
    for item in os.listdir(folder_path):
        item_path = os.path.join(folder_path, item)
        if os.path.isdir(item_path):
            print_directory_structure(item_path, indent)
        else:
            print(f"{indent}- {item}")

# Get the path of the directory where this script is located
script_directory = os.path.dirname(os.path.abspath(__file__))
project_folder_path = script_directory  # Use the script directory as the project folder

print("Directory structure:")
if os.path.exists(project_folder_path):
    print_directory_structure(project_folder_path)
else:
    print("The specified folder does not exist.")
