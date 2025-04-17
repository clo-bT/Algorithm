class MinHeap {
    constructor() {
        this.heap = [];
    }
    insert(val) {
        this.heap.push(val);
        this.bubbleUp();
    }
    bubbleUp() {
        let idx = this.heap.length - 1;
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            if (this.heap[parentIdx] <= this.heap[idx]) break;
            [this.heap[parentIdx], this.heap[idx]] = [this.heap[idx], this.heap[parentIdx]];
            idx = parentIdx;
        }
    }
    remove() {
        if (this.heap.length === 1) return this.heap.pop();
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return min;
    }
    bubbleDown() {
        let idx = 0;
        const length = this.heap.length;
        while (true) {
            let left = 2 * idx + 1;
            let right = 2 * idx + 2;
            let smallest = idx;

            if (left < length && this.heap[left] < this.heap[smallest]) smallest = left;
            if (right < length && this.heap[right] < this.heap[smallest]) smallest = right;

            if (smallest === idx) break;
            [this.heap[idx], this.heap[smallest]] = [this.heap[smallest], this.heap[idx]];
            idx = smallest;
        }
    }
    peek() {
        return this.heap[0];
    }
    size() {
        return this.heap.length;
    }
}

class MaxHeap {
    constructor() {
        this.heap = [];
    }
    insert(val) {
        this.heap.push(val);
        this.bubbleUp();
    }
    bubbleUp() {
        let idx = this.heap.length - 1;
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            if (this.heap[parentIdx] >= this.heap[idx]) break;
            [this.heap[parentIdx], this.heap[idx]] = [this.heap[idx], this.heap[parentIdx]];
            idx = parentIdx;
        }
    }
    remove() {
        if (this.heap.length === 1) return this.heap.pop();
        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return max;
    }
    bubbleDown() {
        let idx = 0;
        const length = this.heap.length;
        while (true) {
            let left = 2 * idx + 1;
            let right = 2 * idx + 2;
            let largest = idx;

            if (left < length && this.heap[left] > this.heap[largest]) largest = left;
            if (right < length && this.heap[right] > this.heap[largest]) largest = right;

            if (largest === idx) break;
            [this.heap[idx], this.heap[largest]] = [this.heap[largest], this.heap[idx]];
            idx = largest;
        }
    }
    peek() {
        return this.heap[0];
    }
    size() {
        return this.heap.length;
    }
}

function solution(operations) {
    const minHeap = new MinHeap();
    const maxHeap = new MaxHeap();
    const count = new Map(); // 숫자 -> 등장 횟수 (삭제 처리 확인용)

    const addCount = (val) => {
        count.set(val, (count.get(val) || 0) + 1);
    };

    const removeCount = (val) => {
        if (!count.has(val)) return false;
        count.set(val, count.get(val) - 1);
        if (count.get(val) <= 0) count.delete(val);
        return true;
    };

    const cleanHeap = (heap, peekFunc) => {
        while (heap.size() > 0 && !count.has(peekFunc())) {
            heap.remove();
        }
    };

    for (const op of operations) {
        const [cmd, numStr] = op.split(' ');
        const num = Number(numStr);
        if (cmd === 'I') {
            minHeap.insert(num);
            maxHeap.insert(num);
            addCount(num);
        } else if (cmd === 'D' && num === 1) {
            cleanHeap(maxHeap, () => maxHeap.peek());
            const max = maxHeap.remove();
            removeCount(max);
        } else if (cmd === 'D' && num === -1) {
            cleanHeap(minHeap, () => minHeap.peek());
            const min = minHeap.remove();
            removeCount(min);
        }
    }

    cleanHeap(minHeap, () => minHeap.peek());
    cleanHeap(maxHeap, () => maxHeap.peek());

    if (count.size === 0) return [0, 0];
    return [maxHeap.peek(), minHeap.peek()];
}
