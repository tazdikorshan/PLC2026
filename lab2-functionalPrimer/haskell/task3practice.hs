grade :: Int -> String

grade score
    | score >= 90 = "A"
    | score >= 80 = "B"
    | score >= 70 = "C"
    | otherwise = "F"

main :: IO ()
main = do
    putStrLn "Testing Grade Function:"
    print (grade 95)
    print (grade 85)
    print (grade 75)
    print (grade 60)