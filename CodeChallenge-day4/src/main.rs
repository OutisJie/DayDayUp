use std::io;

fn main() {
    let mut nums1: Vec<u32> = Vec::new();
    let mut nums2: Vec<u32> = Vec::new();

    let mut str = String::new();
    io::stdin().read_line(&mut str).expect("failed to read");
    let mut nums1 = string_to_vector(str, nums1);
    let mut str = String::new();
    io::stdin().read_line(&mut str).expect("failed to read");
    let mut nums2 = string_to_vector(str, nums2);

    println!("numbers: {:?}, {:?}", nums1, nums2);

    let median: u32 = get_median(nums1, nums2);
    println!("median: {}", median);
}

fn string_to_vector(str: String, mut nums: Vec<u32>) -> Vec<u32>{
    let str_bytes = str.as_bytes();
    let mut start = 1;
    let end = str.len() - 2;

    for (i, &ch) in str_bytes.iter().enumerate() {
        if ch == b',' {
            let temp: u32 = str[start..i].parse().expect("not a number!");
            nums.push(temp);
            start = i + 1;
        } else if ch == b']' {
            let temp: u32 = str[start..end].parse().expect("not a numberrr!");
            nums.push(temp);
        }
    }
    return nums
}

fn get_median(nums1: Vec<u32>, nums2: Vec<u32>) -> u32 {
    let len1 = nums1.len();
    let len2 = nums2.len();
    let mut i = 0;
    let mut j = ((len1 + len2 + 1) / 2) as u32;

    if len1 < len2 {
        
    }

    return j;
}