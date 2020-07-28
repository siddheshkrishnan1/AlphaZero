import pandas as pd
from sklearn import metrics
from sklearn.neighbors import KNeighborsClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import 
from sklearn.externals import joblib



data = pd.read_csv("/Users/siddh1/Documents/SummerHacks/dataFurniture.csv")

X = data.drop(['space_req'], axis=1)
y = data['space_req']
k_range = list(range(1,15))
scores = []
for k in k_range:
    knn = KNeighborsClassifier(n_neighbors=k)
    knn.fit(X, y)
    y_pred = knn.predict(X)
    scores.append(metrics.accuracy_score(y, y_pred))

logreg = LogisticRegression()
logreg.fit(X, y)
y_pred = logreg.predict(X)

joblib.dump(logreg, 'model.pkl')
print("Model dumped!")

logreg = joblib.load('model.pkl')

model_columns = list(x.columns)
joblib.dump(model_columns, 'model_columns.pkl')
print("Models columns dumped!")