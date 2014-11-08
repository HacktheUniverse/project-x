import json

# Extract
with open('planets.json') as data1:
    data = json.load(data1)
data = data['data']

# Transform
new_data = {}
for d in data:
    system = d['pl_hostname']
    if system not in new_data:
        new_data[system] = {k: v for k, v in d.iteritems() if 'pl' not in k}
        new_data[system]['planets'] = []
        new_data[system]['image'] = ''
        new_data[system]['wiki_text'] = ''
    new_data[system]['planets'].append({k: v for k, v in d.iteritems() if 'pl' in k})
new_data = {'systems': [{'name': n, 'details': d} for n, d in new_data.iteritems()]}

# Dump back into file
with open('structured_data.json', 'w') as outfile:
    json.dump(new_data, outfile)
